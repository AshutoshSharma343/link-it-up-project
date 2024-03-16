from flask import Flask, request, jsonify
from googleapiclient.discovery import build
import psycopg2
import openai
from flask_cors import CORS

# API key obtained from Google Cloud Platform Console
API_KEY = 'AIzaSyBRDi28VH99y_Xd5K_jb5MXiSt_LvtgQBY'

openai.api_key = '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'


params = {
    'dbname': 'sample_db',
    'user': 'postgres',
    'password': 'root',
    'host': 'localhost'
}


app = Flask(__name__)
CORS(app)
# Connect to the database
conn = psycopg2.connect(**params)

# YouTube Data API service object
youtube = build('youtube', 'v3', developerKey=API_KEY)


@app.route('/categorize-prompt', methods=['POST'])
def categorize_prompt():
    content = request.json['content']
    
    try:
        additional_message = "Return result which category of influencer is needed. The categories are Entertainment, Education, Gaming, Art, Finiance, Fitness and Others. Return only category name. The result must be only one category name from the above mentioned categories. if the category seems different then you may give Others as Category also\n"

        prompt_message = content + additional_message

        response = openai.Completion.create(
            model="gpt-3.5-turbo-instruct",
            prompt=prompt_message,
            max_tokens=50,
            stop=None
        )
        
        # Parse the response from OpenAI to determine the category
        category = "Other"  # Default to "Other" if not determinable
        # Include your logic here to determine the category from the response
        category = response['choices'][0]['text'].strip()  # Assuming OpenAI's response contains the category name

        return jsonify({"category": category}), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/get_youtube_info/<channel_id>', methods=['GET'])
def get_youtube_info(channel_id):
    channel_info = get_channel_info(channel_id)
    if channel_info:
        return jsonify({
            "Channel Title": channel_info['snippet']['title'],
            "Channel Description": channel_info['snippet']['description'],
            "Subscriber Count": channel_info['statistics']['subscriberCount'],
            "Total Views": channel_info['statistics']['viewCount'],
            "Total Videos": channel_info['statistics']['videoCount']
        })
    else:
        return jsonify({"error": "Channel not found"})
    
def get_channel_info(channel_id):
    request = youtube.channels().list(
        part="snippet,statistics,contentDetails",
        id=channel_id
    )
    response = request.execute()
    return response['items'][0] if 'items' in response else None

@app.route('/influencers/<min_price>/<max_price>/<category>', methods=['GET'])
def get_influencers(min_price, max_price, category):
    try:
        conn = psycopg2.connect(**params)
        cursor = conn.cursor()

        query = """
            SELECT *
            FROM influencers
            WHERE expected_price BETWEEN %s AND %s
            AND channel_category = %s
        """
        cursor.execute(query, (min_price, max_price, category))
        influencers = [{
            'Channel_Id': row[0],
            'Channel_Title': row[1],
            'Channel_Description': row[2],
            'Subscriber_Count': row[3],
            'Total_Videos': row[4],
            'Total_Views': row[5],
            'Estimated_Minutes_Watched': row[6],
            'Estimated_Red_Minutes_Watched': row[7],
            'Comments': row[8],
            'Likes_Count': row[9],
            'Dislikes_Count': row[10],
            'Shares_Count': row[11],
            'Subscribers_Gained': row[12],
            'Subscribers_Lost': row[13],
            'Channel_Category': row[14],
            'Expected_Price': row[15]
        } for row in cursor.fetchall()]

        cursor.close()
        conn.close()

        return jsonify(influencers)
    except psycopg2.Error as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)

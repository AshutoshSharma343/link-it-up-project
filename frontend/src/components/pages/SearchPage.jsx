import React from 'react'
import SearchResults from '../SearchResults'
import SideNav from '../Sidenav'
import Search from '../Search'
import InfluencerProfile from '../InfluencerProfile'

export default function SearchPage() {
    return (
        <div>
            <SideNav />
            <div className="grid grid-cols-3 ml-16 z-10">
                <Search />
                <div className="col-span-2" >
                    <SearchResults />
                </div>
            </div>
        </div>
    )
}

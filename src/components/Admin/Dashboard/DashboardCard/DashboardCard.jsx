import React from 'react'
import './DashboardCard.css'

export const DashboardCard = ({stats}) => {
    return (
            <div className="stat-card">
                <h3>{stats.title}</h3>
                <p className="stat-number">{stats.value}</p>
            </div>
    )
}

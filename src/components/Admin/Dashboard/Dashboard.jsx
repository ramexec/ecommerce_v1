import React from 'react'
import './Dashboard.css'
import { DashboardCard } from './DashboardCard/DashboardCard'

export const Dashboard = () => {

    const getStats = () => {
        const stats = {
            title:"Title",
            value: 6
        }
        return stats;
    }
    return (
        <div className="dashboard-container">
            <DashboardCard stats={getStats()} />
            <DashboardCard stats={getStats()} />
            <DashboardCard stats={getStats()} />
            <DashboardCard stats={getStats()} />
        </div>
    )
}

import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) =>(

        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Corona virus UK updates", "Top-news - 3028 readers")}
            {newsArticle("Elon Musk new production", "Top-news - 8025 readers")}
            {newsArticle("Covid-19 vaccine works", "Top-news - 1029 readers")}
            {newsArticle("BMW new model released", "Top-news - 4053 readers")}
            {newsArticle("Afrtificial Intelligence", "Top-news - 4053 readers")}


        </div>
    )
}

export default Widgets

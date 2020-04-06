const Announcement = props => (
    <div className='Announcement'>
        <span className='Announcement__Content'>{ props.children }</span>
        <style jsx>{`
            .Announcement {
                font-size: 2rem;
                text-align: center;
                color: White;
                height: 100vh;
            }
            .Announcement__Content {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
        `}</style>
    </div>
)

export default Announcement

const Announcement = props => (
    <div className='Announcement'>
        { props.children }
        <style jsx>{`
            .Announcement {
                font-size: 2rem;
                text-align: center;
                color: White;
                line-height: 100vh;
            }
        `}</style>
    </div>
)

export default Announcement

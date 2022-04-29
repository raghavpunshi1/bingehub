import { img_300, unavailable } from '../../config/config'
import Badge from '@mui/material/Badge';
import './SingleContent.css'
import ContentModal from '../../ContentModal/ContentModal'

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
    return (
        <ContentModal media_type={media_type} id={id}>
        <div className='media'>
            <Badge badgeContent={vote_average} color={vote_average>6? 'primary':'secondary'}/>
            <img classname="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className='title'>{title}</b>
            <div className='subTitle'>
                <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
                <span>{date}</span>
            </div>
        </div>
        </ContentModal>

    )
}

export default SingleContent;
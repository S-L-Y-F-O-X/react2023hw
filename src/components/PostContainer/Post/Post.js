import css from './Post.module.css'


const Post = ({post, getPostId}) => {
    const {id, title} = post;
    return (
        <div className={css.Post}>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={()=>getPostId(id)}>Details</button>
        </div>
    );
};

export {Post};
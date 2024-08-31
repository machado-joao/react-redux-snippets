function ProfileCard({ title, handle, imageSrc, description }) {
  return (
    <div className="card">
      <div className="card-name has-text-centered">
        <figure className="is-1by1 is-inline-block">
          <img
            src={imageSrc}
            alt={`${title}'s logo.`}
            height="200"
            width="200"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;

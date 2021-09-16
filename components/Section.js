import Card from './Card';

const Section = ({ genre, videos }) => {
  return (
    <div className='section-container'>
      <h3>{genre}</h3>
      <div className='section-items'>
        {videos.map((video) => (
          <a key={video.id} href={`/video/${video.slug}`}>
            <Card thumbnail={video.thumbnail} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section;

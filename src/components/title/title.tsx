import "./title.css";
interface AppProps {
  title?: string;
  subtitle?: string;
}
const Title = ({ title = "Discover Courses", subtitle }: AppProps) => {
  return (
    <div className="title-wrap">
      <div className="title-badge" role="heading" aria-label={title}>
        <h2 className="title-text">
          {title}{" "}
          <span className="emoji" aria-hidden>
            🚀
          </span>
        </h2>
      </div>
      {subtitle && <p className="title-sub">{subtitle}</p>}
    </div>
  );
};

export default Title;

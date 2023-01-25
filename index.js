const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};
const element = (
  <div className="bg-container">
    <div className="card-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button buttonText="Like" className="Like-button" />
        <Button buttonText="Comment" className="comment-button" />
        <Button buttonText="Share" className="Share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

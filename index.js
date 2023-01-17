const Button = (props) => {
  //  Write your code here.
  const { kind, name } = props;
  return <button className={name}> {kind} </button>;
};

const element = (
  //  Write your code here.
  <div class="sc-bg-container">
    <h1 class="sc-heading"> Social Buttons </h1>
    <div class="social-buttons">
      <Button kind="Like" name="like-button" />
      <Button kind="Comment" name="comment-button" />
      <Button kind="Share" name="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

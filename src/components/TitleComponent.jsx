const TitleComponent = (props) => {
  console.log(props);

  return (
    <>
      <h1>{props.texto}</h1>
    </>
  );
};

export default TitleComponent;

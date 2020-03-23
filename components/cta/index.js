import css from "./index.scss";

class Cta extends React.Component {
  render() {
    return (
      <button type="button" className={css.superCta}>
        Click me
      </button>
    );
  }
}

export default Cta;

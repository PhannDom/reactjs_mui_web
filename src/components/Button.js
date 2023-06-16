import PropTypes from "prop-types";

function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: (props) => {
    console.log(props);
  },
};

export default Button;

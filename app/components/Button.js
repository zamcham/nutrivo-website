function Button(props) {
  const { type, title, variant } = props;
  
  return (
    <button
      type={type}
      className={`text-white px-4 py-2 rounded-md bg-gradient-to-r from-${variant}-400 to-lime-600`}
    >
      {title}
    </button>
  )
}

export default Button
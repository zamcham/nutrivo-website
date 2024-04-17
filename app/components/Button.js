function Button(props) {
  const { type, title, variant } = props;
  
  return (
    <button
     type={type}
      className={`bg-${variant} text-white px-4 py-2 rounded-md`}
    >
      {title}
    </button>
  )
}

export default Button
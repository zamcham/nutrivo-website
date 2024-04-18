import Link from 'next/link';

function Button(props) {
  const { type, title, variant, href } = props;
  const buttonClasses = `text-white px-4 py-1 rounded-md w-auto max-w-32
  bg-gradient-to-r from-${variant}-400 to-lime-600`;

  if (href) {
    return (
      <Link href={href} passHref className={buttonClasses}>
        {title}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
    >
      {title}
    </button>
  )
}

export default Button
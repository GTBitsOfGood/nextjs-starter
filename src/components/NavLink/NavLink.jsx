import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/**
 * Component for routing to different pages
 * @param props
 * @param props.href - The link you are trying to route to
 * @param props.hrefParts - An object containing the values for dynamic routes
 * @param props.children - Either any element like <div> or a string, which will be wrapped with an <a> tag
 * @param props.className - A classname that will be applied to the <a> tag if the child is a string
 * @param props.rest - The component can be passed any other prop from Next's Link component
 */
const NavLink = ({ href, hrefParts, children, className, ...rest }) => {
  const optionalProps = {};

  if (hrefParts != null && typeof hrefParts === "object") {
    let as = href;

    Object.keys(hrefParts).forEach((key) => {
      as = as.replace(`[${key}]`, hrefParts[key]);
    });

    optionalProps.as = as;
  }

  return (
    <Link
      href={href}
      passHref={children != null && !(typeof children === "string")}
      className={className}
      {...optionalProps}
      {...rest}
    >
      {typeof children === "string" ? (
        <a className={className}>{children}</a>
      ) : (
        children
      )}
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  hrefParts: PropTypes.object,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  hrefParts: {},
  className: null,
};

export default NavLink;

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { isString } from "lodash";

const NavLink = ({ href, hrefParts, children, className, ...rest }) => {
  const optionalProps = {};

  if (href.includes("[")) {
    let as = href;

    while (as.includes("[")) {
      as = as.replace(/\[(.+?)]/, (match) => {
        const word = match.substring(1, match.length - 1);

        return hrefParts[word];
      });
    }

    optionalProps.as = as;
  }

  return (
    <Link
      href={href}
      passHref={children != null && !isString(children)}
      {...optionalProps}
      {...rest}
    >
      {isString(children) ? <a className={className}>{children}</a> : children}
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

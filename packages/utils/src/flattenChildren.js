import { isFragment } from 'react-is';

export default function flattenChildren(children) {
  const nodes = [];

  children.forEach((child) => {
    if (isFragment(child)) {
      if (!child.props.children) return;
      nodes.push(...flattenChildren(child.props.children));
    } else {
      nodes.push(child);
    }
  });

  return nodes;
}

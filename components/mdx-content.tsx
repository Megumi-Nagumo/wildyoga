import { JSX } from 'react';
import { highlight } from 'sugar-high';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

import Counter from '@/components/counter';

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// Passing Code function to components
const components = {
  code: Code,
  Counter,
};

// I'm telling MDX remote anytime that I'm compiling and parsing my markdown content, if I found a code snippet, which is using the triple back tick in mdx file that marks it as a code tag, to use this custom code component to highlight the syntax and then wrap it inside of a code.
export default function MdxContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

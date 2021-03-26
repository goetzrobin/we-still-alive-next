import { MarkDownContent } from '@models/typo/MarkDownContent';
import { RichText } from 'prismic-reactjs';
import markdownStyles from './markdown.module.css';

export interface MarkDownProps {
  render: MarkDownContent;
}

const MarkDown = ({ render }: MarkDownProps): React.ReactElement => {
  return (
    <article className={markdownStyles['markdown']}>
      <RichText render={render} />
    </article>
  );
};

export default MarkDown;

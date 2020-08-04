import Document, { DocumentContext } from 'next/document';
import { css } from '../utils/css';

export default class MyDocument extends Document {
  static async getStaticProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    let extractedStyles: string[] = [];
    ctx.renderPage = () => {
      const { styles, result } = css.getStyles(originalRenderPage);
      extractedStyles = styles;
      return result;
    };

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {extractedStyles.map((content, index) => {
            return <style key={index}>{content}</style>;
          })}
        </>
      ),
    };
  }
}

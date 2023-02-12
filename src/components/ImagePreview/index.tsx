import React from 'react';
import css from './style.module.scss';

interface ImagePreviewProps {
  file: File | null;
}

function ImagePreview({ file }: ImagePreviewProps) {
  const [ preview, setPreview ] = React.useState<string>('');

  React.useEffect(() => {
    if (!file) {
      return;
    }

    const objectURL = URL.createObjectURL(file);
    setPreview(objectURL);

    return () => URL.revokeObjectURL(objectURL);
  }, [ file ]);

  return (
    <div className={css.wrapper}>
      { !file ? (
          <div className={css.noImage}>
            <span className={css.noImageText}>No Image</span>
          </div>
        ) : (
          <img
            className={css.image}
            src={preview}
            alt="To recognize"
          />
        )
      }
    </div>
  );
}

export default ImagePreview;

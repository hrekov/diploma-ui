import React, { FormEvent } from 'react';
import css from './style.module.scss';
import ImagePreview from '../ImagePreview';
import joinCSS from 'classnames';
import Button from '../Button';

interface RecognitionFormProps {
  className?: string,
  onSubmit?: (file: File)=> void,
}

function RecognitionForm({ className, onSubmit }: RecognitionFormProps) {
  const inputFileRef = React.useRef(null);
  const [ file, setFile ] = React.useState<File | null>(null);

  const onFileUploadClick = React.useCallback(() => {
    (inputFileRef.current! as HTMLInputElement).click();
  }, []);

  const onSubmitClick = React.useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!onSubmit || !file) {
      return;
    }

    onSubmit(file);
  }, [ onSubmit, file ]);

  const onChooseFile = React.useCallback((event: FormEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;

    if (!files || !files.length) {
      setFile(null);
      return;
    }

    setFile(files[0]);
  }, []);

  const onResetFile = React.useCallback(() => setFile(null), []);

  return (
    <form
      onSubmit={onSubmitClick}
      onReset={onResetFile}
      className={joinCSS(css.form, className)}
    >
      <div>
        <ImagePreview file={file} />
      </div>

      <div>
        <p>Controls:</p>

        <input
          type="file"
          ref={inputFileRef}
          onChange={onChooseFile}
          hidden
        />

        <div className={css.buttons}>
          <Button type="button" onClick={onFileUploadClick}>
            {file ? 'Choose another' : 'Choose File'}
          </Button>

          {file &&
            <Button type="submit">Perform recognition</Button>
          }

          {file &&
            <Button type="reset">Clear form</Button>
          }
        </div>
      </div>
    </form>
  );
}

export default RecognitionForm;

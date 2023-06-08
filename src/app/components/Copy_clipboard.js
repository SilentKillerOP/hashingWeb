import React, { useRef } from 'react';
import Button from './Button';
function CopyToClipboardButton({ text }) {
  const inputRef = useRef(null);
  const [copySuccess, setCopySuccess] = React.useState('Copy');
  function handleCopyToClipboard() {
    inputRef.current.select();
    document.execCommand('copy');
    setCopySuccess('Copied!');
  }

  return (
    <div >
      <input
        type="text"
        readOnly
        value={text}
        ref={inputRef}
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <Button onClick={handleCopyToClipboard}>{copySuccess}</Button>
    </div>
  );
}

export default CopyToClipboardButton;

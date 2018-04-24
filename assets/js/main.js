function setTitle( titleElement, title ) {
  document.getElementsByTagName('title')[0].innerText = title;
  titleElement.innerText = title;
}

function createHead( tableElement ) {
  const head = tableElement.createTHead();
  head.classList = 'text-primary';
  return head;
}

function createHeadCell( cellContent ) {
  const headCell = document.createElement('th');
  headCell.classList = 'text-center';
  headCell.innerHTML = cellContent;
  return headCell;
}

function createBodyCell( cellContent ) {
  const bodyCell = document.createElement('td');
  bodyCell.classList = 'text-center cp';
  bodyCell.title = 'Click to copy to Clipboard';
  bodyCell.innerHTML = cellContent;
  return bodyCell;
}

function createWarning( warningContent ) {
  const warningElement = document.createElement('div');
  warningElement.classList = "alert alert-warning";
  warningElement.innerHTML = '<b>Warning - </b> ' + warningContent;  
  return warningElement;
}

function plotIsoStress( graphElement, isoStressData ) {
  
}

document.addEventListener( 'click', ( event ) => {
  if( event.target.classList.contains('cp') ) {
    const tempTextArea = document.createElement('textArea');
    tempTextArea.value = event.target.innerText;
    const valueCopied = tempTextArea.value;
    document.body.appendChild( tempTextArea );
    tempTextArea.select();

    try{
      let copySuccessfull = document.execCommand('copy');

      if( copySuccessfull ) {
        event.target.innerText = 'Copied';
      } else {
        event.target.innerText = 'Could not copy';
      }
    } catch ( error ) {
      console.error(error);
    }

    document.body.removeChild(tempTextArea);
    setTimeout( resetElement, 1000, event.target, valueCopied);
  }
});

function resetElement( element, content ) {
  element.innerText = content;
}
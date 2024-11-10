export function watchNotes(upgradeList) {
  localStorage.setItem('notes', JSON.stringify(upgradeList));
  console.log('Note changed - localstorage');
}

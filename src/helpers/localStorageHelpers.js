let getFavouritesFromLocalStorage = () => {
    let favs = [];
    let favsString = localStorage.getItem(`favourites`);
    if (favsString) {
      try {
        favs = JSON.parse(favsString);
      }
      catch (e) {
        console.log(e);
      }
    }

    return favs;
  };

  export { getFavouritesFromLocalStorage };
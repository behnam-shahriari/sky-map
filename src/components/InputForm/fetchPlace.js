export const fetchPlace = async (text) => {
    const token = "pk.eyJ1IjoiYmVobmFtLXNoYWhyaWFyaSIsImEiOiJjbDJianoxdWUwZzd1M2NzY3NiODJtdTd0In0.huxT56t4Mz3kWZoxTREDzQ";
    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${token}&cachebuster=1625641871908&autocomplete=true&types=place`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    } catch (err) {
      return { error: "Unable to retrieve places" };
    }
  };
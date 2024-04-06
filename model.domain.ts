// Modelo de Dominio/Negocio
class Address {
  location: string;
  city: string;
  country: string;

  constructor(location: string, city: string, country: string) {
    // reglas de Negocio
    if (location.length < 3) throw "Location must be at least 3 characters";
    if (city.length < 3) throw "City must be at least 3 characters";
    if (country.length < 3) throw "Country must be at least 3 characters";

    this.location = location;
    this.city = city;
    this.country = country;
  }
}

class User {
  id: number;
  name: string;
  lastname: string;
  addresses: Array<Address>;

  constructor(
    id: number,
    name: string,
    lastname: string,
    addresses: Array<Address>
  ) {
    if (id < 0) throw "ID must be a positive number";
    if (name.length < 3) throw "Name must be at least 3 characters";
    if (lastname.length < 3) throw "Lastname must be at least 3 characters";
    if (addresses.length < 1) throw "Lastname must be at least 1 character";

    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.addresses = addresses;
  }
}

// ej: instancia de usuario
const user = new User(1, "Mario", "Guttierrez", [
  new Address("location1", "city1", "country1"),
  new Address("location2", "city2", "country2"),
]);

console.log(user);

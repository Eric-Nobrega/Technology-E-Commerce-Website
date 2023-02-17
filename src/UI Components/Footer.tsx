export const Footer = () => {
  return (
    <div className="flex px-12 text-sm py-8" style={{ fontFamily: " Karla" }}>
      <div className="w-1/4">
        This website has been fully developed by Eric Nobrega. It was developed
        using React | TS | Tailwind | Chakra UI | Firebase | Several 3rd Party
        Libraries
      </div>
      <div className="ml-auto flex gap-x-12">
        <ul>
          <li>Products</li>
          <li>Categories</li>
          <li>Vendors</li>
        </ul>
        <ul>
          <li>Legals</li>
          <li>Refund Policy</li>
          <li>About Us</li>
        </ul>
        <ul>
          <li>Contacts</li>
          <li>Email</li>
          <li>Phone Number</li>
        </ul>
      </div>
    </div>
  );
};

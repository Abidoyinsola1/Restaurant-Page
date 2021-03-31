const contact = () => {
    const details = document.createElement('div');
    details.className = 'container';

    const contactHeader = document.createElement('h1');
    contactHeader.innerText = 'OUR CONTACT DETAILS';
    contactHeader.className = 'text-center text-white';
    details.appendChild(contactHeader);

    const address = document.createElement('h3');
    address.className = 'address text-center';
    address.innerText = 'Office Address: 123 Main Street, New York, NY';
    details.appendChild(address);

    const email = document.createElement('h3');
    email.className = 'email text-center';
    email.innerHTML = 'Email Address: abidoyinsola@gmail.com';
    details.appendChild(email);

    const phone = document.createElement('h3');
    phone.className = 'phone text-center';
    phone.innerHTML = 'Phone Number: +2348038897893';
    details.appendChild(phone);

    return details;
};
export default contact();
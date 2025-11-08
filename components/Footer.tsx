import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#10101A] py-6 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {currentYear} Meet Mori. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
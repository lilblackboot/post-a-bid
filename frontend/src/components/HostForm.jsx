import React, { useState } from 'react';

const AuctionForm = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [imagePreview, setImagePreview] = useState([]);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageURLs = [];
    
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageURLs.push(e.target.result);
        setImagePreview([...imagePreview, ...imageURLs]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName && description && startingPrice && startDate && endDate && agreeTerms) {
      alert(`Auction hosted successfully!\n\nItem Name: ${itemName}\nDescription: ${description}\nStarting Price: ₹${startingPrice}\nStart Date: ${startDate}\nEnd Date: ${endDate}`);
      setItemName('');
      setDescription('');
      setStartingPrice('');
      setStartDate('');
      setEndDate('');
      setImagePreview([]);
      setAgreeTerms(false);
    } else {
      alert('Please fill out all the fields correctly.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="flex gap-6 bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex-1 overflow-y-auto border border-gray-300 rounded-lg p-3">
          <label htmlFor="itemImage" className="block cursor-pointer w-full h-96 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center text-gray-500 text-lg">
            <span id="uploadText">+ Add Item Image</span>
            <input type="file" id="itemImage" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
          </label>
          <div className="flex flex-wrap gap-4 mt-4">
            {imagePreview.map((img, index) => (
              <img key={index} src={img} alt="Preview" className="w-80 h-96 object-cover rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-200" />
            ))}
          </div>
        </div>

        <div className="flex-2">
          <h2 className="text-center text-white text-2xl mb-6">Host an Auction</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="itemName" className="text-white font-semibold">Item Name</label>
              <input type="text" id="itemName" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Enter item name" required className="w-full p-3 border border-orange-500 rounded-lg" />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-white font-semibold">Description</label>
              <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter item description" required className="w-full p-3 border border-orange-500 rounded-lg"></textarea>
            </div>
            <div className="space-y-2">
              <label htmlFor="startingPrice" className="text-white font-semibold">Starting Price (₹)</label>
              <input type="number" id="startingPrice" name="startingPrice" value={startingPrice} onChange={(e) => setStartingPrice(e.target.value)} placeholder="Enter starting price" required className="w-full p-3 border border-orange-500 rounded-lg" />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1 space-y-2">
                <label htmlFor="startDate" className="text-white font-semibold">Start Date</label>
                <input type="date" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="w-full p-3 border border-orange-500 rounded-lg" />
              </div>
              <div className="flex-1 space-y-2">
                <label htmlFor="endDate" className="text-white font-semibold">End Date</label>
                <input type="date" id="endDate" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className="w-full p-3 border border-orange-500 rounded-lg" />
              </div>
            </div>
            <div className="flex items-center justify-center mb-6 text-white">
              <input type="checkbox" id="agreeTerms" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} required className="mr-2" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="#" className="text-blue-500">terms</a> and <a href="#" className="text-blue-500">privacy policy</a>.
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Host Auction</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuctionForm;

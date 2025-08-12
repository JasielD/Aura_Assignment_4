import React,{useState} from 'react'

const RegisterationPage = () => {

     const initialFormData = {
    name: '',
    rollNo: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: '',
    city: '',
    hobbies: [],
    class: '',
    stream: '',
  };

const [formData, setFormData] = useState(initialFormData);
const [submittedData, setSubmittedData] = useState([]);

const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Pune'];
const allHobbies = ['Reading', 'Sports', 'Music', 'Coding', 'Art'];

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        hobbies: checked ? [...prev.hobbies, value] : prev.hobbies.filter(h => h !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

   const handleSubmit = (e) => {
    e.preventDefault();
      setSubmittedData(prev => [...prev, { ...formData, id: Date.now() }]);
      setFormData(initialFormData);
  };

  return (
     <div>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student Registration Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" 
            value={formData.name} onChange={handleChange} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll No.</label>
            <input type="text" name="rollNo" 
            value={formData.rollNo} onChange={handleChange} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" 
            value={formData.email} onChange={handleChange} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber}
             onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea name="address" value={formData.address} 
            onChange={handleChange} rows="2" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="mt-2 space-x-4">
              <label><input type="radio" name="gender" 
              value="Male" checked={formData.gender === 'Male'} 
              onChange={handleChange} className=" border-gray-300" /> Male</label>
              <label><input type="radio" name="gender" 
              value="Female" checked={formData.gender === 'Female'} 
              onChange={handleChange} className="border-gray-300" /> Female</label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <select name="city" value={formData.city}
             onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option value="">Select City</option>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Hobbies</label>
            <div className="mt-2 flex flex-wrap gap-4">
              {allHobbies.map(hobby => (
                <label key={hobby} className="flex items-center">
                  <input type="checkbox" name="hobbies" value={hobby} checked={formData.hobbies.includes(hobby)} 
                  onChange={handleChange} className="h-4 w-4 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-600">{hobby}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <input type="text" name="class" value={formData.class} 
            onChange={handleChange} placeholder="e.g., 2nd Year" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stream</label>
            <input type="text" name="stream" value={formData.stream} 
            onChange={handleChange} placeholder="e.g., BSc-IT"
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div className="md:col-span-2 text-center">
            <button type="submit" 
            className="inline-flex justify-center py-2 px-8 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700">
              Register Student
            </button>
          </div>
        </form>
      </div>

 {submittedData.length > 0 && (
        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registered Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submittedData.map(data => (
              <div key={data.id} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{data.name}</h3>
                <p className="text-sm text-gray-500 mb-3">Roll No: {data.rollNo}</p>
                <p className="text-sm text-gray-600"><strong className="font-medium">Email:</strong> {data.email}</p>
                <p className="text-sm text-gray-600"><strong className="font-medium">Phone:</strong> {data.phoneNumber}</p>
                <p className="text-sm text-gray-600"><strong className="font-medium">Address:</strong> {data.address}, {data.city}</p>
                <p className="text-sm text-gray-600"><strong className="font-medium">Gender:</strong> {data.gender}</p>
                <p className="text-sm text-gray-600"><strong className="font-medium">Class:</strong> {data.class} ({data.stream})</p>
                <p className="text-sm text-gray-600"><strong className="font-medium">Hobbies:</strong> {data.hobbies.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterationPage

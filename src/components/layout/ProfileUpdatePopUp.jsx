import { useState, useContext } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { FaUser, FaVenusMars } from "react-icons/fa";
import AuthContext from "../../store/authContext";
import { BASE_URL_API } from "../../constants";
import { toast } from "react-toastify";

// A reusable gender toggle switch component
const GenderToggle = ({ selectedGender, onGenderChange }) => {
    return (
        <div className="flex rounded-lg border border-gray-300">
            <button
                type="button"
                onClick={() => onGenderChange("Male")}
                className={`flex-1 px-4 py-2 rounded-l-lg transition-colors ${
                    selectedGender === "Male" ? "bg-black text-white" : "bg-white text-black"
                }`}
            >
                Male
            </button>
            <button
                type="button"
                onClick={() => onGenderChange("Female")}
                className={`flex-1 px-4 py-2 rounded-r-lg transition-colors ${
                    selectedGender === "Female" ? "bg-black text-white" : "bg-white text-black"
                }`}
            >
                Female
            </button>
        </div>
    );
};

const ProfileUpdatePopup = ({ onClose }) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("Male"); // Default gender
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const authCtx = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setErrorMessage("Please enter your name.");
            return;
        }
        setIsLoading(true);
        setErrorMessage("");

        try {
            // This is a placeholder for your actual API call.
            // You'll need an endpoint that accepts name and gender and updates the user profile.
            const response = await fetch(`${BASE_URL_API}/user/update-profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authCtx.token}`, // Send the auth token for verification
                },
                body: JSON.stringify({ name, gender }),
            });

            const data = await response.json();

            if (response.ok && data.status === "success") {
                toast.success("Profile updated successfully!");
                authCtx.updateProfileStatus(true); // Update the profile status in the context
                onClose(); // Close the popup
            } else {
                setErrorMessage(data.message || "Failed to update profile. Please try again.");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 animate-fadeIn">
            <div className="bg-white rounded-lg p-8 w-full max-w-sm m-4 shadow-xl animate-slideUp">
                <h2 className="text-2xl font-bold text-center mb-4">Complete Your Profile</h2>
                <p className="text-center text-gray-600 mb-6 text-sm">
                    Please provide your name and gender to personalize your experience.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            <FaUser className="inline mr-2" />
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-100 rounded-lg border-none focus:outline-black"
                            placeholder="Enter your name"
                            autoFocus
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaVenusMars className="inline mr-2" />
                            Gender
                        </label>
                        <GenderToggle selectedGender={gender} onGenderChange={setGender} />
                    </div>
                    {errorMessage && <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition flex justify-center items-center disabled:opacity-50"
                    >
                        {isLoading ? <BiLoaderAlt className="animate-spin" size={24} /> : "Save & Continue"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdatePopup;
// DropdownComponent.tsx

import React, { useState } from "react";

interface DropdownProps {
    options: string[]; // Array of dropdown options
}

const DropdownComponent: React.FC<DropdownProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(
        undefined
    );

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="relative">
            <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded-md shadow-sm outline-none"
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownComponent;

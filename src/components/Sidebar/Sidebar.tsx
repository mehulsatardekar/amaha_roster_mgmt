import {
  removeSelectedProvider,
  resetFilters,
  setFilters,
  setSearchQuery,
  setSelectedProviders,
} from "@/src/store/slices/filterSlice";
import { RootState } from "@/src/store/store";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const colors = ["bg-blue-100", "bg-purple-100", "bg-green-100", "bg-red-100"];

const Sidebar = () => {
  const dispatch = useDispatch();

  const { searchQuery, selectedProviders, users } = useSelector(
    (state: RootState) => state.filters
  );

  const [selectedService, setSelectedService] = useState("All Service");
  const [selectedType, setSelectedType] = useState("All types");
  const [selectedCenter, setSelectedCenter] = useState("All Centres");

  const isFilterApplied =
    selectedService !== "All Service" ||
    selectedType !== "All types" ||
    selectedCenter !== "All Centres";

  const applyFilterHandler = () => {
    dispatch(
      setFilters({
        service: selectedService,
        type: selectedType,
        center: selectedCenter,
      })
    );
  };

  const resetFiltersHandler = () => {
    dispatch(resetFilters());
    setSelectedService("All Service");
    setSelectedType("All types");
    setSelectedCenter("All Centres");
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (provider: string) => {
    if (!selectedProviders.includes(provider) && selectedProviders.length < 5) {
      const updatedSelectedProviders = [...selectedProviders, provider];
      dispatch(setSelectedProviders(updatedSelectedProviders));
    }

    dispatch(setSearchQuery(""));
    setShowDropdown(false);
  };

  const handleRemove = (provider: string) => {
    dispatch(removeSelectedProvider(provider));
  };

  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full flex flex-col gap-4 px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="rounded-lg"
        >
          <option>All Service</option>
          <option value="therapist">Therapist</option>
          <option value="psychiatrist">Psychiatrist</option>
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="rounded-lg"
        >
          <option>All types</option>
          <option value="inhouse">Inhouse</option>
          <option value="outsider">Outsider</option>
        </select>

        <select
          value={selectedCenter}
          onChange={(e) => setSelectedCenter(e.target.value)}
          className="rounded-lg"
        >
          <option>All Centres</option>
          <option value="Andheri Clinic">Andheri</option>
          <option value="Bandra Clinic">Bandra</option>
        </select>

        <div className="flex lg:flex-row sm:flex-col gap-4">
          {isFilterApplied && (
            <button
              onClick={resetFiltersHandler}
              type="button"
              className="px-3 py-2 text-sm font-medium text-center text-terracota800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-terracota100"
            >
              Reset
            </button>
          )}

          <button
            onClick={applyFilterHandler}
            type="button"
            className={`px-3 py-2 text-sm font-medium text-center  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 ${
              isFilterApplied
                ? "bg-terracota800 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            } `}
          >
            Apply
          </button>
        </div>

        <hr className="border-gray-300 my-1" />

        <div className="">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search provider"
              className="w-full border p-2 pl-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => {
                //setSearch(e.target.value);
                setShowDropdown(true);
                const query = e.target.value;
                dispatch(setSearchQuery(query));
              }}
              onFocus={() => setShowDropdown(true)}
            />
            <span className="absolute left-2 top-3 text-gray-500">🔍</span>

            {/* Dropdown */}
            {showDropdown && searchQuery && (
              <div className="absolute w-full bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow-md z-10">
                {users
                  .filter((user) =>
                    user.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((provider) => (
                    <div
                      key={provider.id}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelect(provider.name)}
                    >
                      {provider.name}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Selected Providers */}
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedProviders.map((provider, index) => (
              <div
                key={provider}
                className={`flex items-center justify-between w-full gap-2 px-3 py-3 rounded-md ${
                  colors[index % colors.length]
                }`}
              >
                <p className="text-gray-600 text-sm">{provider}</p>
                <button
                  className="text-gray-700 font-bold"
                  onClick={() => handleRemove(provider)}
                >
                  <Image
                    src="https://res.cloudinary.com/dwhsfh3sc/image/upload/v1740689041/amaha_health/stroke_icon_ugczjc.svg"
                    width={24}
                    height={24}
                    alt="close"
                  />
                </button>
              </div>
            ))}
          </div>

          {selectedProviders.length >= 5 && (
            <p className="text-sm text-red-500 mt-2">
              You can select up to 5 providers.
            </p>
          )}

          {selectedProviders.length <= 0 && (
            <p className="text-sm text-gray-500 mt-2">
              You can search up to 5 provider to view their availability
              specifically.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

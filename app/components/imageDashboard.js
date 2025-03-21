import LULCImage from "./components/images";

const LULCDashboard = () => {
  const lulcData = [
    { src: "/lulc/karura_2020_map.png", title: "LULC Map - 2020" },
    { src: "/lulc/karura_2023_map.png", title: "LULC Map - 2023" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Land Use Land Cover Maps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lulcData.map((map, index) => (
          <LULCImage key={index} src={map.src} title={map.title} />
        ))}
      </div>
    </div>
  );
};

export default LULCDashboard;
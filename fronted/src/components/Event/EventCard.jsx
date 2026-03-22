export const EventCard = ({ event }) => {
  const imgurl = import.meta.env.VITE_IMG_URL;

  return (
    <div className="bg-white shadow border rounded-xl p-4">
      {/* Image */}
      <div className="h-48 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={`${imgurl}/${event.pdf_url}`}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {event.category}
        </span>

        <h2 className="text-lg font-bold mt-2">{event.title}</h2>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {event.description}
        </p>

        <p className="text-xs text-gray-400 mt-2">
          📅 {new Date(event.event_date).toDateString()}
        </p>
      </div>
    </div>
  );
};

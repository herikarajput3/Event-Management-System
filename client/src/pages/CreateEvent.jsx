// src/pages/events/CreateEvent.jsx

const CreateEvent = () => {
  return (
    <div className="max-w-3xl">

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-base-content">
          Create a New Event
        </h1>
        <p className="mt-2 text-base-content/70">
          Fill in the details below to publish your event.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">

        {/* Title */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              Event Title
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter event title"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              Description
            </span>
          </label>
          <textarea
            placeholder="Describe your event"
            className="textarea textarea-bordered w-full h-32"
          />
        </div>

        {/* Date */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              Event Date
            </span>
          </label>
          <input
            type="date"
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              Location
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter location"
            className="input input-bordered w-full"
          />
        </div>

        {/* Capacity */}
        <div>
          <label className="label">
            <span className="label-text font-medium">
              Capacity
            </span>
          </label>
          <input
            type="number"
            placeholder="Number of attendees"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button className="btn btn-primary w-full md:w-auto">
            Create Event
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateEvent;

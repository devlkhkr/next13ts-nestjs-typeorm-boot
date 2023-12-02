"use client";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  View,
  Views,
} from "react-big-calendar";
import LeftArrowIcon from "@mui/icons-material/ArrowBackIos";
import RightArrowIcon from "@mui/icons-material/ArrowForwardIos";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import RightGrid from "./RightGrid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IconButton } from "@mui/material";

moment.locale("ko-KR");
const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2018, 0, 29, 9, 0, 0),
    end: new Date(2018, 0, 30, 12, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: "MS training",
    allDay: true,
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 30, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: "Team lead meeting",
    start: new Date(2018, 0, 29, 8, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
];

const calendarStyle = {
  width: "100%",
  height: "600px",
  display: "flex",
};

const CustomToolbar = (toolbar: any) => {
  const [startDate, setStartDate] = useState(new Date());

  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate("prev");
  };

  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate("next");
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate("current");
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      // <span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
      <span>{date.format("YYYY.MM")}</span>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 40,
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <LeftArrowIcon onClick={goToBack}/>
        {/* </button> */}
        <button onClick={goToCurrent}>현재</button>
        <RightArrowIcon onClick={goToNext}/>
      </div>
      <div>{label()}</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label={'"month" and "year"'} views={['year', 'month']} />
      </LocalizationProvider>
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
    </div>
  );
};

export default function Scheduler() {
  const [calendarView, setCalendarView] = useState<View>(Views.MONTH);
  const [infoView, setInfoView] = useState<boolean>(false);
  console.log(infoView);
  return (
    <>
      <div style={calendarStyle}>
        <BigCalendar
          components={{
            toolbar: CustomToolbar,
          }}
          style={{
            flex: 1,
          }}
          selectable
          localizer={localizer}
          events={events}
          defaultView={Views.MONTH}
          view={calendarView}
          onView={setCalendarView}
          views={[Views.DAY, Views.WEEK, Views.MONTH]}
          step={60}
          defaultDate={new Date("2018-01-01")}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
          showAllEvents={true}
          onSelectSlot={slotInfo => {
            console.log(slotInfo);
            setInfoView(prev => !prev);
          }}
        />
        {infoView && <RightGrid />}
      </div>
    </>
  );
}

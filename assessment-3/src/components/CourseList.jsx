import React, { Component } from "react";
import CourseCard from "./CourseCard";

export class CourseList extends Component {
  render() {
    const { courses } = this.props;

    return (
      <div>
        <h2 className="text-center mb-5">Available Courses</h2>

        <div className="row">
          {courses.length === 0 ? (
            <p>No courses available.</p>
          ) : (
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default CourseList;

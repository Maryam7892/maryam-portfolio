import React from "react";
import styled from "styled-components";

const Badge = styled.span`
  background-color: #1f2937;
  color: #5eead4;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SkillBadge = ({ label }) => <Badge>{label}</Badge>;

export default SkillBadge;
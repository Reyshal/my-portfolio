function SkillListItem({ skill }: { skill: string }) {
  return (
    <div className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm">
      {skill}
    </div>
  );
}

export default SkillListItem;

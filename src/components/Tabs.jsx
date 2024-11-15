const Tabs = ({ todoList, setSelectedTab, selectedTab }) => {
  const tabs = ['All', 'Open', 'Completed'];
  return (
    <nav className='tab-container'>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === 'All'
            ? todoList.length
            : tab === 'Open'
            ? todoList.filter((val) => !val.complete).length
            : todoList.filter((val) => val.complete).length;

        return (
          <button
            onClick={() => {
              setSelectedTab(tab);
            }}
            className={
              'tab-button ' + (tab === selectedTab ? ' tab-selected' : ' ')
            }
            key={tabIndex}>
            <h4>
              {tab} <span>{numOfTasks}</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
};

export default Tabs;

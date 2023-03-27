function getRow(grid, rowIndex) {
    return grid[rowIndex];
  }
  
  function getColumn(grid, columnIndex) {
    return grid.map((row) => row[columnIndex]);
  }
  
  function getSection(grid, x, y) {
    const result = [];
    for (let i = x * 3; i < x * 3 + 3; i++) {
      for (let j = y * 3; j < y * 3 + 3; j++) {
        result.push(grid[i][j]);
      }
    }
    return result;
  }
  
  function includes1to9(array) {
    for (let i = 1; i <= 9; i++) {
      if (!array.includes(i)) {
        return false;
      }
    }
    return true;
  }
  
  function sudokuIsValid(grid) {
    for (let i = 0; i < 9; i++) {
      const row = getRow(grid, i);
      if (!includes1to9(row)) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      const column = getColumn(grid, i);
      if (!includes1to9(column)) {
        return false;
      }
    }
  
    for (let i = 0; i < 9; i++) {
      const [x, y] = subgridCoordinates(i);
      const subgrid = getSection(grid, x, y);
      if (!includes1to9(subgrid)) {
        return false;
      }
    }
    return true;
  }
  
  function subgridCoordinates(index) {
    return [Math.floor(index / 3), index % 3];
  }
  
  function isSame(grid1, grid2) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid1[i][j] !== grid2[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
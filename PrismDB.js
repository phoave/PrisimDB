const fs = require('fs');

class PrismDB {
  constructor(filePath = 'database.pris') {
    this.filePath = filePath;
    this.tables = new Map();
    this.load();
  }

  // Load data from file
  load() {
    if (fs.existsSync(this.filePath)) {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      const parsedData = JSON.parse(data);
      this.tables = new Map(parsedData.map(([key, value]) => [key, new Map(value)]));
    }
  }

  // Save data to file
  save() {
    const data = JSON.stringify(Array.from(this.tables.entries(), ([key, value]) => [key, Array.from(value.entries())]));
    fs.writeFileSync(this.filePath, data, 'utf-8');
  }

  // Create a new table
  createTable(tableName) {
    if (!this.tables.has(tableName)) {
      this.tables.set(tableName, new Map());
      this.save();
    }
  }

  // Drop a table
  dropTable(tableName) {
    if (this.tables.delete(tableName)) {
      this.save();
    }
  }

  // Insert a row into a table
  insert(tableName, key, value) {
    const table = this.tables.get(tableName);
    if (table) {
      table.set(key, value);
      this.save();
    }
  }

  // Select a row from a table
  select(tableName, key) {
    const table = this.tables.get(tableName);
    if (table) {
      return table.get(key);
    }
    return null;
  }

  // Update a row in a table
  update(tableName, key, value) {
    const table = this.tables.get(tableName);
    if (table && table.has(key)) {
      table.set(key, value);
      this.save();
    }
  }

  // Delete a row from a table
  delete(tableName, key) {
    const table = this.tables.get(tableName);
    if (table && table.delete(key)) {
      this.save();
    }
  }

  // Get all keys from a table
  keys(tableName) {
    const table = this.tables.get(tableName);
    if (table) {
      return Array.from(table.keys());
    }
    return [];
  }

  // Get all values from a table
  values(tableName) {
    const table = this.tables.get(tableName);
    if (table) {
      return Array.from(table.values());
    }
    return [];
  }

  // Get all entries from a table
  entries(tableName) {
    const table = this.tables.get(tableName);
    if (table) {
      return Array.from(table.entries());
    }
    return [];
  }
}

// Export the PrismDB class
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PrismDB;
} else {
  window.PrismDB = PrismDB;
}

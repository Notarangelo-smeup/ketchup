const fld1Values = [
  'Customers module',
  'Sales module',
  'Marketing module',
  'Commerce module',
  'Service module',
];

const fld2Values = ['Java', 'Javascript', 'Delphi', 'Kotlin', 'Go'];

const fld3Values = [
  'Marketing',
  'Information Technology',
  'Sales',
  'Customers',
  'Accounting',
  'Logistic',
];

function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function createDataForPagination(
  colSize: number,
  rowSize: number,
  useStepValues: boolean = false
) {
  const columns: any = [];
  let stepValue = -20;
  const stepIncrement = 10;
  const stepValuesAlwaysFilteredRows = [0, 1];

  for (let i = 0; i < colSize; i++) {
    columns.push({
      name: 'FLD' + i,
      title: 'Column ' + i,
      hideValuesRepetitions:
        useStepValues &&
        (Math.random() > 0.5 || stepValuesAlwaysFilteredRows.indexOf(i) >= 0),
    });
  }

  const rows = [];
  for (let i = 0; i < rowSize; i++) {
    const currentRow: {
      cells: any;
    } = { cells: {} };

    for (let j = 0; j < columns.length; j++) {
      const cell: any = {};

      cell.value =
        (!useStepValues ? i.toString() : stepValue.toString()) + j.toString();

      cell.obj = {
        t: '',
        p: '',
        k: cell.value,
      };

      if (j === 0) {
        cell.obj.t = '';
        cell.value = fld1Values[getRandomArbitrary(0, 4)];
      } else if (j === 1) {
        cell.obj.t = '';
        cell.value = fld2Values[getRandomArbitrary(0, 4)];
      }

      currentRow.cells[columns[j].name] = cell;
    }

    if (!(i % stepIncrement)) stepValue++;

    rows.push(currentRow);
  }

  return {
    columns,
    rows,
  };
}

export function filterFakeDepartmentData(filter: string, dataSuffix: string) {
  let data = createFakeDepartmentData(dataSuffix);
  let rowsFiltered = data.rows;
  if (filter) {
    rowsFiltered = data.rows.filter((row: any) => {
      let includes = row.cells['code'].value + ' ' + row.cells['desc'].value;
      return includes.toUpperCase().includes(filter.toUpperCase());
    });
  }
  return {
    columns: data.columns,
    rows: rowsFiltered,
  };
}

export function createFakeDepartmentData(dataSuffix: string) {
  const columns: any = [];
  columns.push({
    name: 'code',
    title: 'Code',
  });
  columns.push({
    name: 'desc',
    title: 'Description',
  });
  const rows = [];
  for (let i = 0; i < fld3Values.length; i++) {
    const currentRow: {
      cells: any;
    } = { cells: {} };
    currentRow.cells['code'] = {
      value: (fld3Values[i].substring(0, 3) + dataSuffix).toUpperCase(),
    };
    currentRow.cells['desc'] = {
      value: fld3Values[i] + dataSuffix,
    };
    for (let j = 0; j < columns.length; j++) {
      currentRow.cells[columns[j].name].obj = {
        t: '',
        p: '',
        k: '',
      };
    }
    rows.push(currentRow);
  }
  return {
    columns,
    rows,
  };
}

export const defaultDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Shareholders module',
          },
          value: 'Shareholders module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Sales module',
          },
          value: 'Sales module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '39.5',
          },
          value: '39.5',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200202',
          },
          value: '02/02/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          value: 'Marketing module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200303',
          },
          value: '03/03/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          value: 'Commerce module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '156.7',
          },
          value: '156.7',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '04/04/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Service module',
          },
          value: 'Service module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '256.7',
          },
          value: '256.7',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200505',
          },
          value: '05/05/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Cloud module',
          },
          value: 'Cloud module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '78.9',
          },
          value: '78.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200606',
          },
          value: '06/06/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Financial module',
          },
          value: 'Financial module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '145.6',
          },
          value: '145.6',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200707',
          },
          value: '07/07/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Delivery module',
          },
          value: 'Delivery module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '278.9',
          },
          value: '278.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200808',
          },
          value: '08/08/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Web module',
          },
          value: 'Web module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '498.7',
          },
          value: '498.7',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200909',
          },
          value: '09/09/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Integration module',
          },
          value: 'Integration module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '99.9',
          },
          value: '99.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20201010',
          },
          value: '10/10/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Banking module',
          },
          value: 'Banking module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '178.9',
          },
          value: '178.9',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20201111',
          },
          value: '11/11/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Analytics module',
          },
          value: 'Analytics module',
          options: true,
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '4',
          },
          value: '4',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '345.6',
          },
          value: '345.6',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20201212',
          },
          value: '12/12/2020',
        },
      },
    },
  ],
};

export const hiddenColumnsData = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
      visible: false,
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      visible: false,
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customer module',
          },
          value: 'Customer module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          value: 'Commerce module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '04/04/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Financial module',
          },
          value: 'Financial module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200707',
          },
          value: '07/07/2020',
        },
      },
    },
  ],
};

export const iconImagesDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Person',
      // Checks 'clickable' class is not added when present but false
      clickable: false,
    },
    {
      name: 'FLD2',
      title: 'Icon',
      // Checks 'clickable' class is added
      clickable: true,
      obj: {
        t: 'J4',
        p: 'ICO',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Image',
      obj: {
        t: 'J4',
        p: 'IMG',
        k: '',
      },
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customers module',
          },
          value: 'John Doe',
        },
        FLD2: {
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'CN;COL;Customers module',
          },
          data: { resource: 'account' },
          value: 'account',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'CN;COL;Customers module',
          },
          data: { resource: 'https://via.placeholder.com/64?text=PF' },
          value: 'https://via.placeholder.com/64?text=PF',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          value: 'Jonnie Doe',
        },
        FLD2: {
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'OG;J1;PATHFILE',
          },
          data: { resource: 'folder' },
          value: 'folder',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'OG;J1;PATHFILE',
          },
          data: { resource: 'https://via.placeholder.com/64?text=PF' },
          value: 'https://via.placeholder.com/64?text=PF',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Sales module',
          },
          value: 'Baby Doe',
        },
        FLD2: {
          obj: {
            t: 'J4',
            p: 'ICO',
            k: 'J1;KEY;CTRL',
          },
          data: { resource: 'play' },
          value: 'play',
        },
        FLD3: {
          obj: {
            t: 'J4',
            p: 'IMG',
            k: 'J1;KEY;CTRL',
          },
          data: { resource: 'https://via.placeholder.com/64?text=PF' },
          value: 'https://via.placeholder.com/64?text=PF',
        },
      },
    },
  ],
};

export const cellStyleDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customers module',
          },
          value: 'Customers module',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
            borderRadius: '50px',
            padding: '3px',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
          style: {
            backgroundColor: 'blue',
            color: 'yellow',
            fontWeight: 'bold',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          value: 'Commerce module',
          style: {
            fontWeight: 'bold',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
          style: {
            fontStyle: 'italic',
            textAlign: 'center',
          },
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '04/04/2020',
          style: {
            fontSize: '30px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          value: 'Marketing module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200303',
          },
          value: '03/03/2020',
        },
      },
    },
  ],
};

export const cellStyleDataTable2 = {
  columns: [
    {
      name: 'FLD1',
      title: 'Column A',
    },
    {
      name: 'FLD2',
      title: 'Column B',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Column C',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Column D',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'CN',
            p: 'COL',
            k: 'CASFRA',
          },
          value: 'CASFRA',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
            borderRadius: '50px',
            writingMode: 'vertical-lr',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '10',
          },
          value: '10',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
            borderRadius: '50px',
            padding: '3px',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180101',
          },
          value: '01/01/2018',
          style: {
            backgroundColor: 'blue',
            color: 'yellow',
            fontWeight: 'bold',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'CN',
            p: 'COL',
            k: 'DELGIO',
          },
          value: 'DELGIO',
          style: {
            fontWeight: 'bold',
          },
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '6',
          },
          value: '6',
          style: {
            fontStyle: 'italic',
            textAlign: 'center',
          },
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
          style: {
            backgroundColor: 'blue',
            color: '#FFF',
          },
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180102',
          },
          value: '02/01/2018',
          style: {
            fontSize: '30px',
          },
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'CN',
            p: 'COL',
            k: 'PARFRA',
          },
          value: 'PARFRA',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '5',
          },
          value: '5',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20180103',
          },
          value: '03/01/2018',
        },
      },
    },
  ],
};

export const sortDataTable = {
  columns: [
    {
      name: 'FLD1',
      title: 'Software',
    },
    {
      name: 'FLD2',
      title: 'Working License',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD3',
      title: 'Price',
      obj: {
        t: 'NR',
        p: '',
        k: '',
      },
    },
    {
      name: 'FLD4',
      title: 'Expiring Date',
    },
  ],
  rows: [
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Customers module',
          },
          options: true,
          value: 'Customers module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200101',
          },
          value: '01/01/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Sales module',
          },
          options: true,
          value: 'Sales module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200202',
          },
          value: '02/02/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Marketing module',
          },
          options: true,
          value: 'Marketing module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '1',
          },
          value: '1',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200303',
          },
          value: '03/03/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Commerce module',
          },
          options: true,
          value: 'Commerce module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200404',
          },
          value: '04/04/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Service module',
          },
          options: true,
          value: 'Service module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200505',
          },
          value: '05/05/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Cloud module',
          },
          options: true,
          value: 'Cloud module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '2',
          },
          value: '2',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200606',
          },
          value: '06/06/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Financial module',
          },
          options: true,
          value: 'Financial module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '100.60',
          },
          value: '100.60',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200707',
          },
          value: '07/07/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Delivery module',
          },
          options: true,
          value: 'Delivery module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '67.8',
          },
          value: '67.8',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200808',
          },
          value: '08/08/2020',
        },
      },
    },
    {
      cells: {
        FLD1: {
          obj: {
            t: 'TA',
            p: 'B£AMO',
            k: 'Web module',
          },
          options: true,
          value: 'Web module',
        },
        FLD2: {
          obj: {
            t: 'NR',
            p: '',
            k: '3',
          },
          value: '3',
        },
        FLD3: {
          obj: {
            t: 'NR',
            p: '',
            k: '120.06',
          },
          value: '120.06',
        },
        FLD4: {
          obj: {
            t: 'D8',
            p: '*YYMD',
            k: '20200909',
          },
          value: '09/09/2020',
        },
      },
    },
  ],
};

export const paginateDataTable = createDataForPagination(20, 500);

export const groupDataTable = createDataForPagination(10, 10);

export const repetitionsGroupDataTable = createDataForPagination(8, 1000, true);

//---- Checkbox and radio data table ----
export function dataTableCheckboxFactory(
  inputType: string = 'SI/NO',
  hideValuesRepetitions: boolean = false
) {
  return {
    config: {
      rowsPerPage: 50,
    },
    data: {
      columns: [
        {
          name: 'A',
          title: 'Numero',
        },
        {
          name: 'B',
          title: 'BarCode',
        },
        {
          hideValuesRepetitions,
          name: 'C',
          title: 'Si/No',
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
        },
      ],
      rows: [
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: 'J;1111ffffffffff',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'J;1111ffffffffff',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '0',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: 'A;12345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'A;12345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '1',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: 'B;987654321098',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'B;987654321098',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '2',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: 'C;123456789012',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'C;123456789012',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '3',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '5',
                p: '',
                t: '',
              },
              options: false,
              value: '5',
            },
            B: {
              obj: {
                k: 'D;1122334455667',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'D;1122334455667',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '4',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '6',
                p: '',
                t: '',
              },
              options: false,
              value: '6',
            },
            B: {
              obj: {
                k: 'E;9876543210123',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'E;9876543210123',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '5',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '7',
                p: '',
                t: '',
              },
              options: false,
              value: '7',
            },
            B: {
              obj: {
                k: 'F;0123987654456',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'F;0123987654456',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '6',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '8',
                p: '',
                t: '',
              },
              options: false,
              value: '8',
            },
            B: {
              obj: {
                k: 'G;1234567890123',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'G;1234567890123',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '7',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '9',
                p: '',
                t: '',
              },
              options: false,
              value: '9',
            },
            B: {
              obj: {
                k: 'H;51112345621',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'H;51112345621',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '8',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '0',
                p: '',
                t: '',
              },
              options: false,
              value: '0',
            },
            B: {
              obj: {
                k: 'I;12345678901',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: 'I;12345678901',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '9',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '10',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '11',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '12',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '',
            },
          },
          id: '13',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '14',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '15',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '16',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '17',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '18',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '19',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '20',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '21',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '22',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '23',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '24',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '1',
                p: '',
                t: '',
              },
              options: false,
              value: '1',
            },
            B: {
              obj: {
                k: '1111',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '1111',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '25',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '2',
                p: '',
                t: '',
              },
              options: false,
              value: '2',
            },
            B: {
              obj: {
                k: '2345',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2345',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '26',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '3',
                p: '',
                t: '',
              },
              options: false,
              value: '3',
            },
            B: {
              obj: {
                k: '6789',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '6789',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '27',
          object: '',
          readOnly: true,
        },
        {
          cells: {
            A: {
              obj: {
                k: '4',
                p: '',
                t: '',
              },
              options: false,
              value: '4',
            },
            B: {
              obj: {
                k: '2511',
                p: 'BRC',
                t: 'J4',
              },
              options: false,
              value: '2511',
            },
            C: {
              obj: {
                k: '1',
                p: inputType,
                t: 'V2',
              },
              options: false,
              value: '1',
            },
          },
          id: '28',
          object: '',
          readOnly: true,
        },
      ],
    },
    key: 'i146',
  };
}

export const performanceDataTable = {
  columns: [
    {
      name: 'XDET',
      obj: {
        k: '',
        p: 'COD_VER',
        t: 'VO',
      },
      title: 'D',
    },
    {
      name: 'COMCOD',
      obj: {
        k: '',
        p: 'JAGRA',
        t: 'V2',
      },
      title: 'Componente',
    },
    {
      name: 'COMDES',
      title: 'Descrizione',
    },
    {
      name: 'COMA01',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Classe\nABC',
    },
    {
      name: 'COMA11',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Stato',
    },
    {
      name: 'COMA12',
      obj: {
        k: '',
        p: 'V2B£CDV',
        t: 'JL',
      },
      title: 'Device\nPrevisti',
    },
    {
      name: 'COMA05',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Sezione\nScheda',
    },
    {
      name: 'COMA06',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Setup\nScheda',
    },
    {
      name: 'COMA07',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Tipo\nXML',
    },
    {
      name: 'COMA08',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Documentazione',
    },
    {
      name: 'COMA09',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Esempi',
    },
    {
      name: 'COMA14',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Responsabile\nSviluppo',
    },
    {
      name: 'COMA17',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Abstract',
    },
    {
      name: 'COMA18',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'FAQ',
    },
    {
      name: 'COMA19',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Glossario',
    },
    {
      name: 'COMA20',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Video\nIntroduzione',
    },
    {
      name: 'COMA21',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Immagine',
    },
    {
      name: 'COMEVE',
      obj: {
        k: '',
        p: '**',
        t: 'JL',
      },
      title: 'Eventi\nAmmessi',
    },
    {
      name: 'COMA35',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Default\nToolbar',
    },
    {
      decimals: 0,
      name: 'COMRAT',
      obj: {
        k: '',
        p: '',
        t: 'NR',
      },
      title: 'Rating',
    },
    {
      name: 'COMA02',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Modulo\nTecnico',
      visible: false,
    },
    {
      name: 'COMA03',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Modulo\nServizi',
      visible: false,
    },
    {
      name: 'COMA04',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Linguaggio',
      visible: false,
    },
    {
      name: 'COMA16',
      obj: {
        k: '',
        p: 'SI/NO',
        t: 'V2',
      },
      title: 'Esempi\nWeb.UP',
      visible: false,
    },
    {
      name: 'COMA10',
      obj: {
        k: '',
        p: 'GRA',
        t: 'JA',
      },
      title: 'Sostituito\nda',
      visible: false,
    },
    {
      name: 'COMA13',
      obj: {
        k: '',
        p: 'SCP_CFG',
        t: 'MB',
      },
      title: 'Setup\ngrafico',
      visible: false,
    },
    {
      name: 'COMA15',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: 'Responsabile\nCliente',
      visible: false,
    },
    {
      name: 'groupingRowColumnCode',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: '',
      visible: false,
    },
    {
      name: 'groupingRowColumnCodeLevel',
      obj: {
        k: '',
        p: '',
        t: '',
      },
      title: '',
      visible: false,
    },
  ],
  rows: [
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'BOX',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'BOX',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'BOX',
            p: '',
            t: '',
          },
          options: false,
          value: 'BOX',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'BOX',
            p: '',
            t: '',
          },
          options: false,
          value: 'BOX',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'BOX',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'BoxList',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;ChangeRow;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;ChangeRow;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '1',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '1',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '1',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'BTN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'BTN',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'BTN',
            p: '',
            t: '',
          },
          options: false,
          value: 'BTN',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'BTN',
            p: '',
            t: '',
          },
          options: false,
          value: 'BTN',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'BTN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Bottoniera',
        },
        COMEVE: {
          obj: {
            k: 'Click;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;Init;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '2',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '2',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Stefano Macconi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Stefano Macconi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '2',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'CAL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CAL',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'CAL',
            p: '',
            t: '',
          },
          options: false,
          value: 'CAL',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'CAL',
            p: '',
            t: '',
          },
          options: false,
          value: 'CAL',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'CAL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Calendario',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;Drop;BtnClick;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;Drop;BtnClick;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '3',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '3',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Paolo Mossini',
            p: '',
            t: '',
          },
          options: false,
          value: 'Paolo Mossini',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '3',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'DSH',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'DSH',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'DSH',
            p: '',
            t: '',
          },
          options: false,
          value: 'DSH',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'DSH',
            p: '',
            t: '',
          },
          options: false,
          value: 'DSH',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'DSH',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Dash',
        },
        COMEVE: {
          obj: {
            k: 'Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '4',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '4',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Francesco Verzeletti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Francesco Verzeletti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '4',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'DYN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'DYN',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'DYN',
            p: '',
            t: '',
          },
          options: false,
          value: 'DYN',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'XML',
            p: '',
            t: '',
          },
          options: false,
          value: 'XML',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'DYN',
            p: '',
            t: '',
          },
          options: false,
          value: 'DYN',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'DYN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Sezione dinamica',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '5',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '5',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Francesco Verzeletti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Francesco Verzeletti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '5',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EXA',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EXA',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'CHA',
            p: '',
            t: '',
          },
          options: false,
          value: 'CHA',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'CHA',
            p: '',
            t: '',
          },
          options: false,
          value: 'CHA',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EXA',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Grafico',
        },
        COMEVE: {
          obj: {
            k: 'Click;DblClick;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;DblClick;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '6',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '6',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giuliano Giancristofaro',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giuliano Giancristofaro',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Federico Fortini',
            p: '',
            t: '',
          },
          options: false,
          value: 'Federico Fortini',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '6',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EXB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EXB',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'MAT',
            p: '',
            t: '',
          },
          options: false,
          value: 'MAT',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'MAT',
            p: '',
            t: '',
          },
          options: false,
          value: 'MAT',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EXB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Matrice',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;ChangeRow;ChangeVal;BtnClick;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;ChangeRow;ChangeVal;BtnClick;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '7',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '7',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Stefano Macconi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Stefano Macconi',
        },
        COMA13: {
          obj: {
            k: 'GRA_EXB',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_EXB',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '7',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EXD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EXD',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'SCH',
            p: '',
            t: '',
          },
          options: false,
          value: 'SCH',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'SCH',
            p: '',
            t: '',
          },
          options: false,
          value: 'SCH',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'DFT',
            p: '',
            t: '',
          },
          options: false,
          value: 'DFT',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EXD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Scheda oggetto',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '8',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '8',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: 'GRA_EXD',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_EXD',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '8',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EXU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EXU',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'EXU',
            p: '',
            t: '',
          },
          options: false,
          value: 'EXU',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'EXU',
            p: '',
            t: '',
          },
          options: false,
          value: 'EXU',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EXU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Matrice modificabile',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;ChangeRow;ChangeCol;Drop;Update;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;ChangeRow;ChangeCol;Drop;Update;Init;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '9',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '9',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Marco Benetti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Marco Benetti',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '9',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'FBK',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'FBK',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'FBK',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Invio con FeedBack di ritorno',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '10',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '10',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '10',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'FLD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'FLD',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'FLD',
            p: '',
            t: '',
          },
          options: false,
          value: 'FLD',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'FLD',
            p: '',
            t: '',
          },
          options: false,
          value: 'FLD',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'FLD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Field',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '11',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '11',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Armando Scarpa',
            p: '',
            t: '',
          },
          options: false,
          value: 'Armando Scarpa',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '11',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'GAU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'GAU',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'GAU',
            p: '',
            t: '',
          },
          options: false,
          value: 'GAU',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'ELE',
            p: '',
            t: '',
          },
          options: false,
          value: 'ELE',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'GAU',
            p: '',
            t: '',
          },
          options: false,
          value: 'GAU',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'GAU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Cruscotto',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '12',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '12',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '12',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'IMG',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'IMG',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'IMG',
            p: '',
            t: '',
          },
          options: false,
          value: 'IMG',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'IMG',
            p: '',
            t: '',
          },
          options: false,
          value: 'IMG',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'IMG',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Immagine',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '13',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '13',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Paolo Mossini',
            p: '',
            t: '',
          },
          options: false,
          value: 'Paolo Mossini',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Federico Fortini',
            p: '',
            t: '',
          },
          options: false,
          value: 'Federico Fortini',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '13',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'IML',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'IML',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'IML',
            p: '',
            t: '',
          },
          options: false,
          value: 'IML',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'IML',
            p: '',
            t: '',
          },
          options: false,
          value: 'IML',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'IML',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Lista immagini',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '14',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '14',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Stefano Macconi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Stefano Macconi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Quinto Bellini',
            p: '',
            t: '',
          },
          options: false,
          value: 'Quinto Bellini',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '14',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'INP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'INP',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'INP',
            p: '',
            t: '',
          },
          options: false,
          value: 'INP',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'INP',
            p: '',
            t: '',
          },
          options: false,
          value: 'INP',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'INP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Input panel',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;Update;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;Update;Init;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '15',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '15',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '15',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'LAB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'LAB',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'LAB',
            p: '',
            t: '',
          },
          options: false,
          value: 'LAB',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'LAB',
            p: '',
            t: '',
          },
          options: false,
          value: 'LAB',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'LAB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Label',
        },
        COMEVE: {
          obj: {
            k: 'Click;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;Init;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '16',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '16',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Francesco Verzeletti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Francesco Verzeletti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Federico Fortini',
            p: '',
            t: '',
          },
          options: false,
          value: 'Federico Fortini',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '16',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'OPN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'OPN',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'OPN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Open',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;L;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '17',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '17',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Franco Parodi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Franco Parodi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '17',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'OUT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'OUT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'OUT',
            p: '',
            t: '',
          },
          options: false,
          value: 'OUT',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'OUT',
            p: '',
            t: '',
          },
          options: false,
          value: 'OUT',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'OUT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'OutputPanel',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '18',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '18',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '18',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TRE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TRE',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'TRE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Albero',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;Expand;Update;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;Expand;Update;Init;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '19',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '19',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giuliano Giancristofaro',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giuliano Giancristofaro',
        },
        COMA13: {
          obj: {
            k: 'GRA_TRE',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_TRE',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '19',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'WEB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'WEB',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'A',
            p: '',
            t: '',
          },
          options: false,
          value: 'A',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'WEB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Browser',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '20',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '20',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Oliviero Maestrelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Oliviero Maestrelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '20',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EML',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EML',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'EML',
            p: '',
            t: '',
          },
          options: false,
          value: 'EML',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'EML',
            p: '',
            t: '',
          },
          options: false,
          value: 'EML',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EML',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Email reader',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '21',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '21',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '22',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'FRM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'FRM',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'FRM',
            p: '',
            t: '',
          },
          options: false,
          value: 'FRM',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: 'FRM',
            p: '',
            t: '',
          },
          options: false,
          value: 'FRM',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'FRM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Form - PDF',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '22',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '22',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Oliviero Maestrelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Oliviero Maestrelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '23',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'G30',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'G30',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'G30',
            p: '',
            t: '',
          },
          options: false,
          value: 'G30',
        },
        COMRAT: {
          obj: {
            k: '5',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '5',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'G30',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Questionario',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '23',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '23',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: 'GRA_G30',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_G30',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '24',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'GEO',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'GEO',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'GEO',
            p: '',
            t: '',
          },
          options: false,
          value: 'GEO',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'GEO',
            p: '',
            t: '',
          },
          options: false,
          value: 'GEO',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'GEO',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Geolocalizzazione',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '24',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '24',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Bruno Santi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Bruno Santi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '25',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'GNT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'GNT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'GNT',
            p: '',
            t: '',
          },
          options: false,
          value: 'GNT',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'GNT',
            p: '',
            t: '',
          },
          options: false,
          value: 'GNT',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'GNT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Gantt',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '25',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '25',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '26',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'KNO',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'KNO',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'KNO',
            p: '',
            t: '',
          },
          options: false,
          value: 'KNO',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'ELE',
            p: '',
            t: '',
          },
          options: false,
          value: 'ELE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'KNO',
            p: '',
            t: '',
          },
          options: false,
          value: 'KNO',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'KNO',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Knob',
        },
        COMEVE: {
          obj: {
            k: 'Update;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Update;Init;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '26',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '26',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Francesco Verzeletti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Francesco Verzeletti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '27',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'MIN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'MIN',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'MIN',
            p: '',
            t: '',
          },
          options: false,
          value: 'MIN',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'MIN',
            p: '',
            t: '',
          },
          options: false,
          value: 'MIN',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'MIN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'MindMap',
        },
        COMEVE: {
          obj: {
            k: 'Click;DblClick;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;DblClick;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '27',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '27',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '28',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'PAY',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'PAY',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'PAY',
            p: '',
            t: '',
          },
          options: false,
          value: 'PAY',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'PAY',
            p: '',
            t: '',
          },
          options: false,
          value: 'PAY',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'PAY',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Paypal',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '28',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '28',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '29',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'PDF',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'PDF',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'PDF',
            p: '',
            t: '',
          },
          options: false,
          value: 'PDF',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'PDF',
            p: '',
            t: '',
          },
          options: false,
          value: 'PDF',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'PDF',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Pdf Viewer',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '29',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '29',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '30',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'SPL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SPL',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'SPL',
            p: '',
            t: '',
          },
          options: false,
          value: 'SPL',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'SPL',
            p: '',
            t: '',
          },
          options: false,
          value: 'SPL',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'SPL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SpotLight',
        },
        COMEVE: {
          obj: {
            k: 'Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '30',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '30',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '31',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TED',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TED',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TED',
            p: '',
            t: '',
          },
          options: false,
          value: 'TED',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'TED',
            p: '',
            t: '',
          },
          options: false,
          value: 'TED',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'TED',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Text Editor',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '31',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '31',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Franco Parodi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Franco Parodi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '32',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TML',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TML',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'B',
            p: '',
            t: '',
          },
          options: false,
          value: 'B',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TML',
            p: '',
            t: '',
          },
          options: false,
          value: 'TML',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'TML',
            p: '',
            t: '',
          },
          options: false,
          value: 'TML',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'TML',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Timeline',
        },
        COMEVE: {
          obj: {
            k: 'Change;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '32',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '32',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '33',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'ACC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'ACC',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'ACC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Accordion',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;Expand;Drop;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;Expand;Drop;Init;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '33',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '33',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Armando Scarpa',
            p: '',
            t: '',
          },
          options: false,
          value: 'Armando Scarpa',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '35',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'ACT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'ACT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'ACT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Azioni virtuali',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '34',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '34',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '36',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'ATM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'ATM',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'ATM',
            p: '',
            t: '',
          },
          options: false,
          value: 'ATM',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'ATM',
            p: '',
            t: '',
          },
          options: false,
          value: 'ATM',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'ATM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Activity time Line',
        },
        COMEVE: {
          obj: {
            k: 'Change;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '35',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '35',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Paolo Mossini',
            p: '',
            t: '',
          },
          options: false,
          value: 'Paolo Mossini',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '37',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'CAM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CAM',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'CAM',
            p: '',
            t: '',
          },
          options: false,
          value: 'CAM',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'CAM',
            p: '',
            t: '',
          },
          options: false,
          value: 'CAM',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'CAM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Camera',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '36',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '36',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giuliano Giancristofaro',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giuliano Giancristofaro',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '38',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'CDE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CDE',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'CDE',
            p: '',
            t: '',
          },
          options: false,
          value: 'CDE',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'CDE',
            p: '',
            t: '',
          },
          options: false,
          value: 'CDE',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'CDE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Code editor',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '37',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '37',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Franco Parodi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Franco Parodi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '39',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'CND',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CND',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'CND',
            p: '',
            t: '',
          },
          options: false,
          value: 'CND',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'CND',
            p: '',
            t: '',
          },
          options: false,
          value: 'CND',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'CND',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CountDown',
        },
        COMEVE: {
          obj: {
            k: 'Change;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '38',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '38',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '40',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'DEV',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'DEV',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'DEV',
            p: '',
            t: '',
          },
          options: false,
          value: 'DEV',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: 'DEV',
            p: '',
            t: '',
          },
          options: false,
          value: 'DEV',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'DEV',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Device',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '39',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '39',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: 'GRA_DEV',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_DEV',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '41',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EDT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EDT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'EDT',
            p: '',
            t: '',
          },
          options: false,
          value: 'EDT',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'EDT',
            p: '',
            t: '',
          },
          options: false,
          value: 'EDT',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EDT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Editor di testo',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '40',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '40',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Franco Parodi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Franco Parodi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Gagliardo Piero',
            p: '',
            t: '',
          },
          options: false,
          value: 'Gagliardo Piero',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '42',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EXC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EXC',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: 'EXC',
            p: '',
            t: '',
          },
          options: false,
          value: 'EXC',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EXC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Foglio EXCEL',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '41',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '41',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: 'GRA_EXC',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_EXC',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Simona Bonomi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Simona Bonomi',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '43',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'FLU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'FLU',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '4',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '4',
        },
        COMA06: {
          obj: {
            k: 'FLU',
            p: '',
            t: '',
          },
          options: false,
          value: 'FLU',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'FLU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Flusso di funzioni',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '42',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '42',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: 'GRA_FLU',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_FLU',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Marco Benetti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Marco Benetti',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '44',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'G53',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'G53',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMRAT: {
          obj: {
            k: '5',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '5',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'G53',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Stampa in PDF',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '43',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '43',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Oliviero Maestrelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Oliviero Maestrelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '45',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'HTM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'HTM',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: 'TXT',
            p: 'GRA',
            t: 'JA',
          },
          options: true,
          value: 'TXT',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'HTM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Browser',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '44',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '44',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA13: {
          obj: {
            k: 'GRA_HTM',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_HTM',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '46',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'HTR',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'HTR',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'HTR',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTR',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'HTR',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTR',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'HTR',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Albero orizzontale',
        },
        COMEVE: {
          obj: {
            k: 'Click;Expand;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;Expand;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '45',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '45',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '47',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'IFL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'IFL',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: 'IFL',
            p: '',
            t: '',
          },
          options: false,
          value: 'IFL',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'IFL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Flusso interattivo',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '46',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '46',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '48',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'IMD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'IMD',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '4',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '4',
        },
        COMA06: {
          obj: {
            k: 'IMD',
            p: '',
            t: '',
          },
          options: false,
          value: 'IMD',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'IMD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Immagine dinamica',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '47',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '47',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Oliviero Maestrelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Oliviero Maestrelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '49',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'JSO',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'JSO',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'JSO',
            p: '',
            t: '',
          },
          options: false,
          value: 'JSO',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'JSO',
            p: '',
            t: '',
          },
          options: false,
          value: 'JSO',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'JSO',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'JSON',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '48',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '48',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '50',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'LIN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'LIN',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'LIN',
            p: '',
            t: '',
          },
          options: false,
          value: 'LIN',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'LIN',
            p: '',
            t: '',
          },
          options: false,
          value: 'LIN',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'LIN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Linea',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '49',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '49',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '51',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'MAP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'MAP',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'MAP',
            p: '',
            t: '',
          },
          options: false,
          value: 'MAP',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'MAP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Immagine attiva',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '50',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '50',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: 'GRA_MAP',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_MAP',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '52',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'MSS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'MSS',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'MSS',
            p: '',
            t: '',
          },
          options: false,
          value: 'MSS',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'MSS',
            p: '',
            t: '',
          },
          options: false,
          value: 'MSS',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'MSS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Messaggio',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '51',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '51',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Armando Scarpa',
            p: '',
            t: '',
          },
          options: false,
          value: 'Armando Scarpa',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '53',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'OGN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'OGN',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'OGN',
            p: '',
            t: '',
          },
          options: false,
          value: 'OGN',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'OGN',
            p: '',
            t: '',
          },
          options: false,
          value: 'OGN',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'OGN',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Organigramma',
        },
        COMEVE: {
          obj: {
            k: 'Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '52',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '52',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '54',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'PAT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'PAT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'PAT',
            p: '',
            t: '',
          },
          options: false,
          value: 'PAT',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'PAT',
            p: '',
            t: '',
          },
          options: false,
          value: 'PAT',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'PAT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Path',
        },
        COMEVE: {
          obj: {
            k: 'Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '53',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '53',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Franco Parodi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Franco Parodi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '55',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'PGB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'PGB',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'PGB',
            p: '',
            t: '',
          },
          options: false,
          value: 'PGB',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'PGB',
            p: '',
            t: '',
          },
          options: false,
          value: 'PGB',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'PGB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'ProgressBar',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '54',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '54',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Franco Parodi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Franco Parodi',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '56',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'REP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'REP',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '4',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '4',
        },
        COMA06: {
          obj: {
            k: 'REP',
            p: '',
            t: '',
          },
          options: false,
          value: 'REP',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'REP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Report',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '55',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '55',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Oliviero Maestrelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Oliviero Maestrelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '57',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'SEM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SEM',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'SEM',
            p: '',
            t: '',
          },
          options: false,
          value: 'SEM',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'ELE',
            p: '',
            t: '',
          },
          options: false,
          value: 'ELE',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'SEM',
            p: '',
            t: '',
          },
          options: false,
          value: 'SEM',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'SEM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Semaforo',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '56',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '56',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '58',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'SHE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SHE',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'SHE',
            p: '',
            t: '',
          },
          options: false,
          value: 'SHE',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'SHE',
            p: '',
            t: '',
          },
          options: false,
          value: 'SHE',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'SHE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Spread Sheet',
        },
        COMEVE: {
          obj: {
            k: 'Update;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Update;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '57',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '57',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '59',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TCL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TCL',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TCL',
            p: '',
            t: '',
          },
          options: false,
          value: 'TCL',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '7',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '7',
        },
        COMA06: {
          obj: {
            k: 'TCL',
            p: '',
            t: '',
          },
          options: false,
          value: 'TCL',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'TCL',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Tag cloud',
        },
        COMEVE: {
          obj: {
            k: 'Click;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Click;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '58',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '58',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Chiara Zambelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiara Zambelli',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '60',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TMP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TMP',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TMP',
            p: '',
            t: '',
          },
          options: false,
          value: 'TMP',
        },
        COMA04: {
          obj: {
            k: 'Web',
            p: '',
            t: '',
          },
          options: false,
          value: 'Web',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'TMP',
            p: '',
            t: '',
          },
          options: false,
          value: 'TMP',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'TMP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TreeMap',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '59',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '59',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Francesco Verzeletti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Francesco Verzeletti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '61',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TXT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TXT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TXT',
            p: '',
            t: '',
          },
          options: false,
          value: 'TXT',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'HTM',
            p: '',
            t: '',
          },
          options: false,
          value: 'HTM',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'TXT',
            p: '',
            t: '',
          },
          options: false,
          value: 'TXT',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'TXT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Testo',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '60',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '60',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: 'Massimo Sciola',
            p: '',
            t: '',
          },
          options: false,
          value: 'Massimo Sciola',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '62',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'WFD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'WFD',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'C',
            p: '',
            t: '',
          },
          options: false,
          value: 'C',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: 'WFD',
            p: '',
            t: '',
          },
          options: false,
          value: 'WFD',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'WFD',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Workflow designer',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '61',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '61',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '63',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'BAS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'BAS',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '4',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '4',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'BAS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Modulo base        Ser',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '62',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '62',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: 'Oliviero Maestrelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Oliviero Maestrelli',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '65',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'CMS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CMS',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'CMS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Interfaccia CMS',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: '',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        groupingRowColumnCode: {
          obj: {
            k: '63',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '63',
        },
        COMA11: {
          obj: {
            k: 'Inattivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Inattivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '66',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'COM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'COM',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'COM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Comunicazioni      Ser',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '64',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '64',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: 'GRA_COM',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_COM',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '67',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'DBM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'DBM',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: 'DBM',
            p: '',
            t: '',
          },
          options: false,
          value: 'DBM',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'DBM',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Database Migration',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: '',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        groupingRowColumnCode: {
          obj: {
            k: '65',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '65',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: 'GRA_DBM',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_DBM',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '68',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'DSP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'DSP',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '1',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '1',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'DSP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Formati video      Ser',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '66',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '66',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '69',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EXE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EXE',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'EXE',
            p: '',
            t: '',
          },
          options: false,
          value: 'EXE',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'EXE',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Esecuzione Programma PC',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '67',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '67',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '70',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'INT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'INT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'XML',
            p: '',
            t: '',
          },
          options: false,
          value: 'XML',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'INT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Servizi interni    Ser',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '68',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '68',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: 'Oliviero Maestrelli',
            p: '',
            t: '',
          },
          options: false,
          value: 'Oliviero Maestrelli',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '71',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'MSG',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'MSG',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'MSG',
            p: '',
            t: '',
          },
          options: false,
          value: 'MSG',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'MSG',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Messaggio',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '69',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '69',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: 'GRA_MSG',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_MSG',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '72',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'OCX',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'OCX',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'OCX',
            p: '',
            t: '',
          },
          options: false,
          value: 'OCX',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '1',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '1',
        },
        COMA06: {
          obj: {
            k: 'OCX',
            p: '',
            t: '',
          },
          options: false,
          value: 'OCX',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'OCX',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Controllo ActiveX',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '70',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '70',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '73',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'POP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'POP',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'POP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Popup',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '71',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '71',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '74',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'QRY',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'QRY',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'QRY',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Ricerca oggetto',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L;P;T;W',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L;P;T;W',
        },
        groupingRowColumnCode: {
          obj: {
            k: '72',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '72',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '75',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'SET',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SET',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'SET',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Setup utente',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '73',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '73',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '76',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'SPC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SPC',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '4',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '4',
        },
        COMA06: {
          obj: {
            k: 'SPC',
            p: '',
            t: '',
          },
          options: false,
          value: 'SPC',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'SPC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SPC',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '74',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '74',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '77',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'SRI',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SRI',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'SRI',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Ingressi seriale',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '75',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '75',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '78',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'STR',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'STR',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: 'TRE',
            p: 'GRA',
            t: 'JA',
          },
          options: true,
          value: 'TRE',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '1',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '1',
        },
        COMA06: {
          obj: {
            k: 'SRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'SRI',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'STR',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Stella',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '76',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '76',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '79',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'SYS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'SYS',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'SYS',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Operazioni AS/400  Ser',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '77',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '77',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '80',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TRA',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TRA',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: 'TRE',
            p: 'GRA',
            t: 'JA',
          },
          options: true,
          value: 'TRE',
        },
        COMA01: {
          obj: {
            k: 'D',
            p: '',
            t: '',
          },
          options: false,
          value: 'D',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'TRA',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRA',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMRAT: {
          obj: {
            k: '6',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '6',
        },
        COMA06: {
          obj: {
            k: 'TRE',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRE',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'TRA',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Albero con tab',
        },
        COMEVE: {
          obj: {
            k: 'Change;Click;DblClick;Expand;Update;Init;',
            p: '**',
            t: 'JL',
          },
          options: true,
          value: 'Change;Click;DblClick;Expand;Update;Init;',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '78',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '78',
        },
        COMA11: {
          obj: {
            k: 'Attivo',
            p: '',
            t: '',
          },
          options: false,
          value: 'Attivo',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Giovanni Del Bono',
            p: '',
            t: '',
          },
          options: false,
          value: 'Giovanni Del Bono',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA19: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
      },
      id: '81',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'CHT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CHT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'CHT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Chart              Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: '',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        groupingRowColumnCode: {
          obj: {
            k: '79',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '79',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '83',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'CUB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'CUB',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'CUB',
            p: '',
            t: '',
          },
          options: false,
          value: 'CUB',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: 'GRI',
            p: '',
            t: '',
          },
          options: false,
          value: 'GRI',
        },
        COMRAT: {
          obj: {
            k: '4',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '4',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'CUB',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Cubo                 Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: '',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        groupingRowColumnCode: {
          obj: {
            k: '80',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '80',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: 'GRA_CUB',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_CUB',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '84',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'DOC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'DOC',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '1',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '1',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'DOC',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Documenti          Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: '',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        groupingRowColumnCode: {
          obj: {
            k: '81',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '81',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '85',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EMU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EMU',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'EMU',
            p: '',
            t: '',
          },
          options: false,
          value: 'EMU',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: 'EMU',
            p: '',
            t: '',
          },
          options: false,
          value: 'EMU',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EMU',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Emulazione 5250      Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '82',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '82',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: 'GRA_EMU',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_EMU',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '86',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'EVT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'EVT',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '2',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '2',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'EVT',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Gestione eventi      Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C;L',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C;L',
        },
        groupingRowColumnCode: {
          obj: {
            k: '83',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '83',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '87',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'G18',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'G18',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: 'G18',
            p: '',
            t: '',
          },
          options: false,
          value: 'G18',
        },
        COMA04: {
          obj: {
            k: 'Delphi',
            p: '',
            t: '',
          },
          options: false,
          value: 'Delphi',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '1',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '1',
        },
        COMA06: {
          obj: {
            k: 'G18',
            p: '',
            t: '',
          },
          options: false,
          value: 'G18',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'G18',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Report dinamico      Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '84',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '84',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '88',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'GND',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'GND',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'GND',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Gantt / Distinta     Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '85',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '85',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Dario Foresti',
            p: '',
            t: '',
          },
          options: false,
          value: 'Dario Foresti',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '89',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'GRP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'GRP',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '3',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '3',
        },
        COMA06: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMDES: {
          obj: {
            k: 'GRP',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Grafo                Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: 'LOC',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: 'LOC',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '86',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '86',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: 'GRA_GRP',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: true,
          value: 'GRA_GRP',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: true,
            disabled: true,
          },
          obj: {
            k: '1',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '1',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '90',
      object: '',
      readOnly: true,
    },
    {
      cells: {
        COMCOD: {
          obj: {
            k: 'TRG',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'TRG',
        },
        groupingRowColumnCodeLevel: {
          obj: {
            k: '0',
            p: 'HEADER',
            t: 'JG',
          },
          options: true,
          value: '0',
        },
        COMA10: {
          obj: {
            k: '',
            p: 'GRA',
            t: 'JA',
          },
          options: false,
          value: '',
        },
        COMA01: {
          obj: {
            k: 'Z',
            p: '',
            t: '',
          },
          options: false,
          value: 'Z',
        },
        COMA03: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA02: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA05: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA04: {
          obj: {
            k: 'Java',
            p: '',
            t: '',
          },
          options: false,
          value: 'Java',
        },
        COMA07: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMRAT: {
          obj: {
            k: '1',
            p: '',
            t: 'NR',
          },
          options: false,
          value: '1',
        },
        COMA06: {
          obj: {
            k: 'TRG',
            p: '',
            t: '',
          },
          options: false,
          value: 'TRG',
        },
        COMA09: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA08: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMDES: {
          obj: {
            k: 'TRG',
            p: 'JAGRA',
            t: 'V2',
          },
          options: true,
          value: 'Albero con griglia Obs',
        },
        COMEVE: {
          obj: {
            k: '',
            p: '**',
            t: 'JL',
          },
          options: false,
          value: '',
        },
        COMA21: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA20: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA12: {
          obj: {
            k: 'C',
            p: 'V2B£CDV',
            t: 'JL',
          },
          options: true,
          value: 'C',
        },
        groupingRowColumnCode: {
          obj: {
            k: '87',
            p: 'ROW',
            t: 'JG',
          },
          options: true,
          value: '87',
        },
        COMA11: {
          obj: {
            k: 'Chiuso',
            p: '',
            t: '',
          },
          options: false,
          value: 'Chiuso',
        },
        XDET: {
          data: {
            sizeX: '18px',
            resource: 'magnify',
            sizeY: '18px',
          },
          obj: {
            k: '000103',
            p: 'COD_VER',
            t: 'VO',
          },
          options: false,
          value: 'magnify',
        },
        COMA14: {
          obj: {
            k: 'Sanfilippo Costantino',
            p: '',
            t: '',
          },
          options: false,
          value: 'Sanfilippo Costantino',
        },
        COMA13: {
          obj: {
            k: '',
            p: 'SCP_CFG',
            t: 'MB',
          },
          options: false,
          value: '',
        },
        COMA35: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA16: {
          data: {
            checked: false,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA15: {
          obj: {
            k: '',
            p: '',
            t: '',
          },
          options: false,
          value: '',
        },
        COMA18: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA17: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
        COMA19: {
          data: {
            checked: false,
            disabled: true,
          },
          obj: {
            k: '',
            p: 'SI/NO',
            t: 'V2',
          },
          options: false,
          value: '',
        },
      },
      id: '91',
      object: '',
      readOnly: true,
    },
  ],
};
